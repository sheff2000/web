export const loadAllUsers = async ({value, id}) => {
    try {
        if (value === 'list')
        {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            //console.log(data);
            return data;
        }

        if (value === 'post')
        {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums?userId='+id);
            const data = await response.json();
            //console.log(data);
            return data;
        }

        if (value === 'album')
        {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?albumId='+id);
            const data = await response.json();
            //console.log('https://jsonplaceholder.typicode.com/photos?albumId='+id, data);
            return data;
        }
        
    } catch (error) {
        console.error("There was an error fetching the users:", error);
    }
};