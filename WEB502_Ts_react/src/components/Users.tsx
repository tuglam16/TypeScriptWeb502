import React, { useEffect, useState } from "react";

interface User {
id: number;
name: string;
phone: string;
website: string;
}

const Users: React.FC = () => {
const [users, setUsers] = useState<User[]>([]);
const [selectedUser, setSelectedUser] = useState<User | null>(null);

useEffect(() => {
const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
};
fetchUsers();
}, []);

return (
<div className="p-6">
    <h1 className="text-5xl font-bold mb-4">useEffect</h1>
    <ul className="list-decimal pl-6 space-y-1">
    {users.map((user) => (
        <li
        key={user.id}
        onClick={() => setSelectedUser(user)}
        className="cursor-pointer hover:text-blue-600"
        >
        {user.id}. {user.name} | {user.phone}
        </li>
    ))}
    </ul>

    <div className="mt-10">
    <h2 className="text-4xl font-bold mb-2">Thông tin chi tiết</h2>
    {selectedUser ? (
        <div className="text-lg space-y-1">
        <p>
            <b>Họ và tên:</b> {selectedUser.name}
        </p>
        <p>
            <b>Số điện thoại:</b> {selectedUser.phone}
        </p>
        <p>
            <b>Website:</b> {selectedUser.website}
        </p>
        </div>
    ) : (
        <p>Chọn một người dùng để xem chi tiết...</p>
    )}
    </div>
</div>
);
};

export default Users;
