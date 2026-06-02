'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import Logo from './Logo';

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-5 py-2 bg-white shadow shadow-amber-100">
      <Logo />
      <div id="nav-links" className="flex items-center justify-center gap-10">
        <Link href={'/'}>
          <p className="font-semibold">Features</p>
        </Link>
        <Link href={'/'}>
          <p className="font-semibold">Pricing</p>
        </Link>
        <Link href={'/'}>
          <p className="font-semibold">Enterprise</p>
        </Link>
      </div>
      <div id="cta" className="flex items-center justify-center gap-10">
        <motion.div
          id="login-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="cursor-pointer p-5 font-extrabold"
            variant="secondary"
          >
            Login
          </Button>
        </motion.div>
        <motion.div
          id="register-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="cursor-pointer p-5 bg-amber-700 hover:bg-amber-600 font-extrabold">
            Get Started
          </Button>
        </motion.div>
      </div>
    </nav>
  );
}
