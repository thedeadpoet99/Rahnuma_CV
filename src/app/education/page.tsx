"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { education } from '@/lib/data';

export default function Education() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Education</h1>
          <p className="text-xl text-muted-foreground">My academic journey and achievements</p>
        </motion.div>

        <div className="grid gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <GraduationCap className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{edu.degree}</CardTitle>
                            <CardDescription className="text-lg font-semibold text-primary">
                              {edu.institution}
                            </CardDescription>
                          </div>
                        </div>
                        {edu.gpa && (
                          <Badge variant="secondary" className="ml-4">
                            GPA: {edu.gpa}
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      {edu.description && (
                        <p className="text-muted-foreground mb-4">{edu.description}</p>
                      )}
                      
                      <Button asChild>
                        <Link href={`/education/${edu.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </CardContent>
                  </div>

                  {edu.image && (
                    <div className="relative h-48 md:h-full">
                      <Image
                        src={edu.image}
                        alt={`${edu.institution} certificate`}
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
