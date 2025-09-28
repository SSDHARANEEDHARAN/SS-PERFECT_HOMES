import { useState } from "react";
import { ChevronDown, Hammer, PaintBucket, Wrench, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectDropdownProps {
  onProjectSelect: (project: string) => void;
}

const ProjectDropdown = ({ onProjectSelect }: ProjectDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    { id: 'wood-work', name: 'Wood Work', icon: Hammer },
    { id: 'furnished-work', name: 'Furnished Work', icon: PaintBucket },
    { id: 'welding-works', name: 'Welding Works', icon: Wrench },
    { id: 'craft-works', name: 'Craft Works', icon: PaintBucket },
    { id: 'automation-works', name: 'Automation Works', icon: Cpu },
  ];

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Projects & Designs</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-elegant z-50">
          <div className="p-2">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <button
                  key={project.id}
                  onClick={() => {
                    onProjectSelect(project.id);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                >
                  <IconComponent className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{project.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDropdown;