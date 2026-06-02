'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { IconBolt } from '@tabler/icons-react';

export default function Logo() {
  return (
    <Link href={'/'} className="flex gap-4">
      <div className="flex size-10 items-center justify-center rounded-lg bg-[#a64000] text-white">
        <IconBolt className="size-6" />
      </div>
      <motion.div
        id="logo"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <h1 className="font-bold text-4xl">
          Task<span className="text-[#EC6A06]">Flow</span>
        </h1>
      </motion.div>
    </Link>
  );
}
