import Table from './Table';

const Sample = () => {
    const data = [
        {
            title: 'The Great Gatsby',
            pages: 180,
            isRead: true
        },
        {
            title: 'To Kill a Mockingbird',
            pages: 281,
            isRead: true
        },
        {
            title: '1984',
            pages: 328,
            isRead: false
        },
        {
            title: 'The Catcher in the Rye',
            pages: 277,
            isRead: true
        },
        {
            title: 'Brave New World',
            pages: 311,
            isRead: false
        }
    ];

    return (
        <div>
            <h1>My Book List</h1>
            <Table data={data} />
        </div>
    );
};

export default Sample;