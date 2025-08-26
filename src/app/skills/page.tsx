"use client"

import { motion } from 'framer-motion';
import { Code, Users, Lightbulb, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/lib/data';

const skillCategories = {
  technical: {
    title: 'Technical Skills',
    description: 'Programming languages, frameworks, and tools',
    icon: Code,
    color: 'text-blue-600'
  },
  soft: {
    title: 'Soft Skills',
    description: 'Leadership, communication, and interpersonal abilities',
    icon: Users,
    color: 'text-green-600'
  }
};

export default function Skills() {
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  const SkillBar = ({ skill }: { skill: { name: string; level?: number } }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        {skill.level && <span className="text-sm text-muted-foreground">{skill.level}%</span>}
      </div>
      <div className="w-full bg-muted rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level || 50}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-gradient-to-r from-primary to-blue-600 h-3 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground">My technical abilities and soft skills</p>
        </motion.div>

        {/* Skills Overview Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {Object.entries(skillCategories).map(([key, category], index) => {
            const categorySkills = skills.filter(skill => skill.category === key);
            const Icon = category.icon;
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <Badge key={skill.name} variant="secondary" className="text-sm">
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Skills with Progress Bars */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Technical Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {technicalSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Soft Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {softSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skills Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-blue-600/10">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font
