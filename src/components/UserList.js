import * as React from 'react';
import { Paper } from '@mui/material';



export default function UserList() {
    
  return (
    
    <Paper className='p-3 mb-2 bg-dağk text-white' elevation={5} style ={{margin: "-150px 50px 0px 250px" ,position: "relative", textAlign:"center", backgroundColor:"grey"}}>
  <div className='d-flex justify-content-center align-items-center h-100'>
  <h3 className='mb-3' style={{textAlign:"center", backgroundImage:"/images/icons/school.png"}}>Proje Tamamlandı !</h3>
  </div>
  <div style={{textAlign:"left", padding:"0px 1150px 0px px",fontSize:"19px"}}> 
  <div> -------- AÇIKLAMA-------- </div>
  <div>*Çalışanlar, kayıtlı kullanıcılar listesi</div>
  <div>*Kullanıcılara ait iletişim bilgilerinin bulunduğu liste ve kullanıcı id, isimleri</div>
  <div>*İlan listesi</div>
  <div>*İzin listesi ve hangi id-isim'li kullanıcıya ait olduğu gösteren tablo</div>
  <div>*Harcama listesi ve hangi id-isim'li kullanıcıya ait olduğu gösteren tablo</div>
  <div>*Mesai listesi ve hangi id-isim'li kullanıcıya ait olduğu gösteren tablo</div>
  <div>*İlan kaydı oluşturma ekranı</div>
  <div>*İzin kaydı oluşturma ekranı</div>
  <div>*Harcama kaydı oluşturma ekranı</div>
  <div>*Mesai kaydı oluşturma ekranı</div>
  <div>*Kullanıcı kaydı oluşturma ekranı, iletişim bilgilerininde kaydı bu sayfa da oluşmaktadır</div>


  </div>

  </Paper>
)
}