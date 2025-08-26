import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>{personalInfo.contact.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-primary">
                  {personalInfo.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href={`tel:${personalInfo.contact.phone}`} className="hover:text-primary">
                  {personalInfo.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Links</h3>
            <div className="flex space-x-4">
              
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              
                href={`mailto:${personalInfo.contact.email}`}
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-muted-foreground">
              {personalInfo.tagline}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
