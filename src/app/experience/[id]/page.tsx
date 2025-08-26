"use client"

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { experience } from '@/lib/data';

export default function ExperienceDetail() {
  const params = useParams();
  const exp = experience.find(e => e.id === params.id);

  if (!exp) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Experience Not Found</h1>
          <Button asChild>
            <Link href="/experience">
              <ArrowLeft className="mr-2" size={16} />
              Back to Experience
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Button asChild className="mb-6">
            <Link href="/experience">
              <ArrowLeft className="mr-2" size={16} />
              Back to Experience
            </Link>
          </Button>

          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl">{exp.position}</CardTitle>
                    {exp.department && (
                      <p className="text-lg font-medium text-muted-foreground mt-1">
                        {exp.department}
                      </p>
                    )}
                    <p className="text-xl font-semibold text-primary mt-2">
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                {exp.companyLogo && (
                  <div className="relative w-32 h-32 bg-muted rounded-lg p-4 flex items-center justify-center">
                    <Image
                      src={exp.companyLogo}
                      alt={`${exp.company} logo`}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-6 mt-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar size={20} />
                  <span className="text-lg">{exp.period}</span>
                </div>
                {exp.location && (
                  <div className="flex items-center space-x-2">
                    <MapPin size={20} />
                    <span className="text-lg">{exp.location}</span>
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
                <ul className="space-y-4">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start text-lg">
                      <span className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {exp.image && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={`${exp.company} workplace`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
