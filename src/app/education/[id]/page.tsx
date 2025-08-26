"use client"

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { education } from '@/lib/data';

export default function EducationDetail() {
  const params = useParams();
  const edu = education.find(e => e.id === params.id);

  if (!edu) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Education Not Found</h1>
          <Button asChild>
            <Link href="/education">
              <ArrowLeft className="mr-2" size={16} />
              Back to Education
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
            <Link href="/education">
              <ArrowLeft className="mr-2" size={16} />
              Back to Education
            </Link>
          </Button>

          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl">{edu.degree}</CardTitle>
                    <p className="text-xl font-semibold text-primary mt-2">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                {edu.gpa && (
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    GPA: {edu.gpa}
                  </Badge>
                )}
              </div>

              <div className="flex flex-wrap gap-6 mt-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar size={20} />
                  <span className="text-lg">{edu.period}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={20} />
                  <span className="text-lg">{edu.location}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              {edu.description && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">About</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              )}

              {edu.image && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Certificate</h3>
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <Image
                      src={edu.image}
                      alt={`${edu.institution} certificate`}
                      fill
                      className="object-contain bg-muted"
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
