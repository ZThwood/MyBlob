import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Admin',
};

export default async function Admin() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    return <p>Admin Page</p>;
}
