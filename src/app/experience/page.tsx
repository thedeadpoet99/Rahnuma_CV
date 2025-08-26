"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Work Experience</h1>
          <p className="text-xl text-muted-foreground">My professional journey and achievements</p>
        </motion.div>

        <div className="grid gap-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-4 gap-6">
                  {exp.companyLogo && (
                    <div className="relative h-32 md:h-full bg-muted flex items-center justify-center p-4">
                      <Image
                        src={exp.companyLogo}
                        alt={`${exp.company} logo`}
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                  )}
                  
                  <div className={exp.companyLogo ? "md:col-span-3" : "md:col-span-4"}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Briefcase className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{exp.position}</CardTitle>
                            {exp.department && (
                              <CardDescription className="text-sm font-medium">
                                {exp.department}
                              </CardDescription>
                            )}
                            <CardDescription className="text-lg font-semibold text-primary">
                              {exp.company}
                            </CardDescription>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                      
                      <Button asChild>
                        <Link href={`/experience/${exp.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
