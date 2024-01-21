'use client';

import React,{useState} from 'react'
import styles from './footer.module.css'
import { sites } from '@/utils/items'
import Snackbar from '../Snackbar/Snackbar';

const Footer = () => {

  const [data, setData] = useState({
    name:'',
    message:''
  });

  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const handleName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setData({...data,name:e?.target.value});
  }

  const handleMessage = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({...data,message:e?.target.value});
  }

  const handleSubmit = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if(data.name === '' || data.message === ''){
      setError('Error: Please fill all the fields');
      return;
    };

    try{
      const res = await fetch('/api/messages',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      });

      const val = await res.json();
      
      if(val.status === 200){
        setData({ name:'',message:'' });
        setError('');
        setShow(true);
        setTimeout(()=>{
          setShow(false);
        },2000);
      }
      else{
        setError('Error: Something went wrong..');
      }
    }
    catch(err){
      console.log(err);
    }
  }
 
  return (
    <>
    <div className={styles.tp} id='Contact'>
    <span className={styles.made}>
      Made with <span className={styles.mainLang}>Next.js</span> and <span className={styles.mainLang}>Vanilla CSS</span>
    </span>
    </div>
    <div className={styles.footMain}>
      <div className={styles.siteSec}>
      <span className={styles.con}>
        <h2>Connect </h2>
      </span>
      <div className={styles.site}>
        {
          sites.map((site,index)=>{
            return(
              <span key={index}>
                <img src={site.img} alt={site.name} className={styles.img} /> <a href={site.link} target='_blank' rel='noopener noreferrer' className={styles.link}>{site.name}</a>
              </span>
            )
          })
        }
      </div>
      </div>
        <div className={styles.foot}>
      <div className={styles.foot}>
        <h3 className={styles.made}>
            Send me a message
        </h3>
        {error && <span className={styles.error}>{error}</span>}
        <div>
        <span className={styles.made}>Name: </span> <input title='text' type='text' className={styles.input} onChange={(e)=>handleName(e)} value={data.name} />
        </div>
        <div>
        <span className={styles.messName}>Message: </span> <textarea title='text' className={styles.mess} onChange={(e)=>handleMessage(e)} value={data.message} />
        </div>

        <button className={styles.btn} onClick={(e)=>handleSubmit(e)}>Send</button>
       </div>
        </div>
    </div>
    <Snackbar show={show} />
    </>
  )
}

export default Footer
