
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ShowAllUser from '../../../../Map/ShowAllUser/ShowAllUser';
import Swal from 'sweetalert2';

const AllUser = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleMakeAdmin = user => {
        console.log(user)
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data.modifiedCount)
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: 'Success!',
                        text: `${user.name} is an admin now`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className='mt-24 mx-8 p-10'>
            <h1 className='text-4xl font-bold mb-10 text-center'>Make Admin</h1>
            <div className="bg-white px-6 py-12">
                <div className="flex justify-between mb-4">
                    <h1 className="text-2xl font-bold bistro-font ">Total user: {users?.length} </h1>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>role</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <ShowAllUser
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    handleMakeAdmin={handleMakeAdmin}
                                ></ShowAllUser>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;