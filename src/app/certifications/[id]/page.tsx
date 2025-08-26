"use client"

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { certifications } from '@/lib/data';

export default function CertificationDetail() {
  const params = useParams();
  const cert = certifications.find(c => c.id === params.id);

  if (!cert) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Certification Not Found</h1>
          <Button asChild>
            <Link href="/certifications">
              <ArrowLeft className="mr-2" size={16} />
              Back to Certifications
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
            <Link href="/certifications">
              <ArrowLeft className="mr-2" size={16} />
              Back to Certifications
            </Link>
          </Button>

          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-3xl">{cert.name}</CardTitle>
                  <p className="text-xl font-semibold text-primary mt-2">
                    {cert.organization}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-6 text-muted-foreground">
                <Calendar size={20} />
                <span className="text-lg">{cert.period}</span>
              </div>
            </CardHeader>

            <CardContent>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">About</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {cert.achievements && cert.achievements.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Achievements & Recognition</h3>
                  <ul className="space-y-4">
                    {cert.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start text-lg">
                        <span className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {cert.image && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Certificate</h3>
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={`${cert.name} certificate`}
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
