import { Mail, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background/80 backdrop-blur-md border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Noa Opigez. Tous droits réservés.
            </p>
            <p className='text-sm text-muted-foreground'>Portfolio créé par <span className=''><a href='https://riberadev.fr' target='_blank' className='hover:underline'>RiberaDev</a></span></p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:pro.opigez@gmail.com" 
              className="text-muted-foreground hover:text-blue-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/noa-opigez-592470332" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://www.instagram.com/noa_prods" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
