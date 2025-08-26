"use client"

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { volunteerWork } from '@/lib/data';

export default function VolunteerDetail() {
  const params = useParams();
  const work = volunteerWork.find(w => w.id === params.id);

  if (!work) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Volunteer Work Not Found</h1>
          <Button asChild>
            <Link href="/volunteer">
              <ArrowLeft className="mr-2" size={16} />
              Back to Volunteer Work
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
            <Link href="/volunteer">
              <ArrowLeft className="mr-2" size={16} />
              Back to Volunteer Work
            </Link>
          </Button>

          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-3xl">{work.position}</CardTitle>
                  <p className="text-xl font-semibold text-primary mt-2">
                    {work.organization}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-6 text-muted-foreground">
                <Calendar size={20} />
                <span className="text-lg">{work.period}</span>
              </div>
            </CardHeader>

            <CardContent>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">About</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {work.description}
                </p>
              </div>

              {work.achievements && work.achievements.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                  <ul className="space-y-4">
                    {work.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start text-lg">
                        <span className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {work.image && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <Image
                      src={work.image}
                      alt={`${work.organization} activities`}
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
