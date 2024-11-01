import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home',
};

export default async function Page() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    return <p>Dashboard Page</p>;
}
