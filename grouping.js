const obj = [
    { key: 'Sample 1', data: 'Data1' },
    { key: 'Sample 2', data: 'Data2' },
    { key: 'Sample 1', data: 'Data1' },
    { key: 'Sample 3', data: 'Data3' },
    { key: 'Sample 4', data: 'Data1' }
];

const grouped = {};

obj.forEach(item => {
    if (!grouped[item.key]) {
        grouped[item.key] = [];
    }
    grouped[item.key].push(item);
});

console.log(grouped);