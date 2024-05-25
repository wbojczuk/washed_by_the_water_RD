"use client"
import styles from "./header.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>
        <h1>Property Maintenance <br />Serving <span className="underline">Asheville</span>, NC</h1>

        <p>We are Washed By The Water, your one-stop solution for all home and property maintenance needs. We specialize in a wide range of services including landscaping, lawn care, house washing, and deck cleaning and staining. Our expertise extends to window cleaning, general repairs, painting and staining, plumbing, electrical work, and carpentry. Whether you need flooring installed, furniture assembled, Among much more!</p>
        

        <Link href="/contact" className="main-link">Get a Quote</Link>

        <h4>-- Bonded and Insured! --</h4>

        <img src="/img/header-bg.webp" alt="" className="bg-img" />
        <div className="shader"></div>

    </header>
  )
}
