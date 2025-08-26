"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl lg:text-6xl font-bold tracking-tight"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl lg:text-2xl text-muted-foreground font-medium"
              >
                {personalInfo.tagline}
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/experience">
                  View My Work
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="/cv.pdf" download>
                  <Download className="mr-2" size={16} />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex space-x-4 pt-4"
            >
              
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              
                href={`mailto:${personalInfo.contact.email}`}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-blue-600/20 p-2"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </motion.div>
              
              {/* Floating elements for visual appeal */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-8">Explore my journey</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/education', label: 'Education' },
              { href: '/experience', label: 'Experience' },
              { href: '/volunteer', label: 'Volunteer Work' },
              { href: '/certifications', label: 'Certifications' },
              { href: '/skills', label: 'Skills' },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              >
                <Button variant="ghost" asChild>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
