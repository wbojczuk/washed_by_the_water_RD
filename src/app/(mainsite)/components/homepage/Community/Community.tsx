import Link from 'next/link';
import styles from './community.module.css';

export default function Community(){
return (
 <div className={styles.community}>
    <div className={styles.textWrapper}>
        <h4>Being Involved</h4>
        <h2>Focus On Community</h2>
        <p>Our unique community program brings fathers and sons together to beautify the community, fostering strong family bonds and a sense of local pride. By involving families in our projects, we not only ensure that our surroundings look their best, but also strengthen the connections between community members, creating a supportive and engaged neighborhood. Trust Washed By The Water to not only maintain your property but also enrich the community spirit.</p>
        <Link className='main-link' href={"/contact"}>Contact Us</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/community.png" alt="image of a black car" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};