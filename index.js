let natureWorld = () =>
    {
  let mountain = ['Everest', 'Fuji', 'Taj', 'Himalaya'];
  let river = ['Ganga', 'Yamuna', 'Kavery', 'Brahmaputra'];
  let [,, ...rest]=river;
  let eco = [...mountain,rest];
  console.log("rest is", eco);
  return eco;
    }
  

document.getElementById("neethu").innerHTML =   natureWorld();







