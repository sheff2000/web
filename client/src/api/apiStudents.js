//const BASE_URL = 'http://localhost:3000/';

export const fetchstudents = async () => {
      try {
            const response = await fetch('/students');
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            return data;
          } catch (error) {
            console.error('Error fetching students:', error);
          }
}

export const fetchStudentInfo = async (id) => {
    try {
        const response = await fetch('/student/' + id);
        console.log('ASK by student #' + id);
        
        if (!response.ok) {
          // Если ответ не ok
          const errorData = await response.json();
          throw new Error(errorData.message || `Error: ${response.status}`);
        }
      
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching student:', error);
        throw error;
    }
}

export const opstUpdateStudentInfo = async (id, formData) => {
  
  //  const response = await fetch('/students/' + id, {
  //      method: 'PUT',
  //      body: formData
  //  });
    const response = await fetch('/students/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData))
    });
    
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || `Error: ${response.status}`);
    }
    return await response.json();
};

