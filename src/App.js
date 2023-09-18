import './App.css';

const user = {
  name: 'Tyler Balaskovitz',
  imageUrl: 'https://media.licdn.com/dms/image/C5603AQFSAC2SpuYKkw/profile-displayphoto-shrink_200_200/0/1652786098928?e=1700697600&v=beta&t=VFh5Q0OcGviA-HYIr_mo82dKMXAA7XpxP-xRJPwe8zI',
  imageSize: 180,
  test: 'Test1'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        {user.name}
        </p>
        <img
          className='tyler'
          src={user.imageUrl}
          alt={'Photo of' + user.name}
          style={{
            width: user.imageSize,
          height: user.imageSize}}
        />
        <a
          className="App-link"
          href={user.imageUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
        Click for a picture of me
        </a>
      </header>
    </div>
  );
}

export default App;
