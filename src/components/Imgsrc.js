import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';



export default function Imgsrc() {

 
    
  return (
    // <Router >

    <div>
        <div className ="arka" style={{backgroundImage:
            "url(https://blockchain.org.nz/wp-content/uploads/sites/28/2021/02/Blockchain-Newsletter-feb16-1800x500-1.jpg)"}} > 
            </div>
        <div className='card1' > <Card1/> </div>
        <div className='card2' > <Card2/> </div>       
        <div className='card3' > <Card3/> </div>       
        <div className='card4' > <Card4/> </div> 
        <div className="arkaKomple" style={{backgroundImage:
            "url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)"}} > </div>      
       
    </div>

    // </Router>

  );
}


    // {/* <div>
    //     {/* 👇️ react router link */}
    //     <Link to="/about">
    //       <img
    //         src={''}
    //         alt="example"
    //         className="photo"
    //       />
    //     </Link>

    //     <br />
    //     <br />

    //     {/* 👇️ Anchor link */}
    //     <a href="https://google.com" target="_blank" rel="noreferrer">
    //       <img
    //         src="https://bobbyhadz.com/images/blog/react-prevent-page-refresh-on-form-submit/thumbnail.webp"
    //         alt="example"
    //       />
    //     </a>
    // </div> */}
