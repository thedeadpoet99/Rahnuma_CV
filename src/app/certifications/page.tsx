"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { certifications } from '@/lib/data';

export default function Certifications() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Certifications</h1>
          <p className="text-xl text-muted-foreground">Professional certifications and achievements</p>
        </motion.div>

        <div className="grid gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{cert.name}</CardTitle>
                          <CardDescription className="text-lg font-semibold text-primary">
                            {cert.organization}
                          </CardDescription>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1 mt-4 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        <span>{cert.period}</span>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-4">{cert.description}</p>
                      
                      {cert.achievements && cert.achievements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Achievements:</h4>
                          <ul className="space-y-1">
                            {cert.achievements.slice(0, 3).map((achievement, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <Button asChild>
                        <Link href={`/certifications/${cert.id}`}>
                          View Certificate
                        </Link>
                      </Button>
                    </CardContent>
                  </div>

                  {cert.image && (
                    <div className="relative h-48 md:h-full">
                      <Image
                        src={cert.image}
                        alt={`${cert.name} certificate`}
                        fill
                        className="object-cover rounded-r-lg"
                      />
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
