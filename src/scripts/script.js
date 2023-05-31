const uploadForm = document.getElementById('uploadForm');

uploadForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const fileInput = document.getElementById('csvFile');
  const message = document.getElementById('message');

  const file = fileInput.files[0];
  
  if(file.type === 'text/csv'){

    const formData = new FormData();

    formData.append('csvFile', file);

    try {
      const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar o arquivo.');
    }

    const data = await response.json();
    message.style= 'display:flex;'

    setTimeout(()=>{message.style = 'display:none;'},1000);
    setTimeout(()=>{location.reload()},2000);

    
  } catch (error) {
    console.error('Erro:', error);
  }


}else{
  const error = document.getElementById('error');
  error.style = 'display:flex;';

  setTimeout(()=>{error.style = 'display:none;'},1000);

}


});
