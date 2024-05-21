"use client"
import { CSSProperties } from "react"
import styles from "./aboutus.module.css"
import Link from "next/link"

export default function AboutUs() {
  //@ts-check
  const cssProps = {"--width": "90%"} as CSSProperties
  return (
    <section className={styles.aboutUs}>
        <div className={styles.textWrapper}>
          <h4>About Us</h4>
            <h1>About Washed By <br /> <span className="underline">The Water</span></h1>

            <p>We combine comprehensive services, community focus, and personalized attention to meet all your property maintenance needs. From landscaping to house washing, we ensure every aspect of your property shines. Our unique community program unites fathers and sons in efforts to beautify neighborhoods, fostering strong family bonds and community pride. At Washed By The Water, we tailor our services to each client's specific requirements, guaranteeing exceptional results with every project.</p>

            <Link className="main-link" href="/contact">Get a Quote</Link>
        </div>


        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src="/img/about.png" alt="image of house" className={styles.mainImg} />
            <div className={styles.imgStyle}></div>
          </div>
        </div>
    </section>
  )
}
