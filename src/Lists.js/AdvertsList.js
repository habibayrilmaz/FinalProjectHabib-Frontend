import * as React from 'react';
import { Paper } from '@mui/material';


export default function AdvertsList() {

    const [advert, setAdvert] = React.useState([]);

            React.useEffect(() => {
                const fetchProducts = async () => {
                const response = await fetch("http://localhost:8080/advert/all")
                const json = await response.json()   
                console.log(response.ok)
                if (response.ok) {
                  setAdvert(json)
                }
                console.log(json)
                }
                fetchProducts()
                }, [])
        
        
    

  return (
    
    <Paper className='p-3 mb-2 bg-dağk text-white' elevation={5} style ={{margin: "-150px 50px 0px 250px" ,position: "relative", textAlign:"center", backgroundColor:"grey"}}>
  <div className='d-flex justify-content-center align-items-center h-100'>
   <div className='text-white'>              
   <h3 className='mb-3' style={{textAlign:"center", backgroundImage:"/images/icons/school.png"}}>Kayıtlı İlanlar</h3>
   </div>
   </div>


                <div className='container p-3 mb-2 bg-light text-dark' >
                <table  className="table table-bordered table-hover ">
                <caption >İlan Listesi</caption>
                <thead className="table-dark">
                    <tr >
                    <th scope="col">ID</th>
                    <th scope="col">İlan Başlığı</th>
                    <th scope="col">Pozisyon</th>
                    <th scope="col">Departman</th>
                    <th scope="col">İlan Türü</th>
                    <th scope="col">İlan Açıklaması</th>
                    </tr>
                </thead>
                <tfoot className="table-secondary">
                <tr>
                <th scope="col">ID</th>
                    <th scope="col">İlan Başlığı</th>
                    <th scope="col">Pozisyon</th>
                    <th scope="col">Departman</th>
                    <th scope="col">İlan Türü</th>
                    <th scope="col">İlan Açıklaması</th>
                </tr>
                </tfoot>
                {advert.map((advert, index) => {

                    return(
                <tbody key={advert.id}>
                    <tr >
                    <td >{advert.id}</td>
                    <td>{advert.advertHeader}</td>
                    <td>{advert.advertPosition}</td>
                    <td>{advert.advertDepartment}</td>
                    <td>{advert.advertType}</td>
                    <td>{advert.advertDetail}</td>
                    </tr>
                </tbody> 
                )})}
                </table>
                </div>
    </Paper>
            )
}