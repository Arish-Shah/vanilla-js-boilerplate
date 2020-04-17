const Header = () => {
  const template = document.createElement('template');
  template.innerHTML = `
    <header>
      <h1>Parcel App</h1>
      <p>Edit src/app.js and see changes</p>
    </header>  
  `;
  return template.content.cloneNode(true);
};

export default Header;
