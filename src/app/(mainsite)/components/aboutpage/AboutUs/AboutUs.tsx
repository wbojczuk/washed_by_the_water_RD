import Link from 'next/link';
import styles from './aboutus.module.css';

export default function AboutUs(){
return (
 <div className={styles.about}>
    <div className={styles.textWrapper}>
        <h2>About The Owner</h2>
        <p>Meet Michael Hall, the owner of Washed by The Water LLC. Michael is a former felon, gang member, and
drug addict who has transformed his life to become a successful business owner, men's enrichment
advocate, and certified expert in community health care, CPSS trauma resilience training, and recovery
coaching. His inspiring journey demonstrates that one chapter doesn't define your entire narrative. <br /><br />
Choose Washed by The Water LLC for a business that cares deeply about your property and your
community.
</p>
        <Link className='main-link' href={"/contact"}>Get A Quote</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/aboutus.webp" alt="image of a house" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};