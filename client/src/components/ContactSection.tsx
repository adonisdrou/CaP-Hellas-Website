import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import FruitDecorations from './FruitDecorations';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες'),
  email: z.string().email('Μη έγκυρη διεύθυνση email'),
  phone: z.string().min(5, 'Το τηλέφωνο είναι υποχρεωτικό'),
  message: z.string().min(10, 'Το μήνυμα πρέπει να έχει τουλάχιστον 10 χαρακτήρες'),
  language: z.enum(['en', 'el', 'pl']),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      language: language,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xyzejqwv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Επιτυχία!',
          description: 'Θα επικοινωνήσει η Selina Majerska σύντομα!',
        });
        form.reset();
      } else {
        throw new Error('Αποτυχία');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: 'Σφάλμα',
        description: 'Δεν ήταν δυνατό να σταλεί το μήνυμα. Δοκιμάστε ξανά.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 scroll-mt-16" style={{ backgroundColor: 'hsl(var(--section-light-orange) / 0.6)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" data-testid="text-contact-title">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-contact-subtitle">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>{t.contact.form.submit}</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.name}</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.email}</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.phone}</FormLabel>
                        <FormControl>
                          <Input placeholder="+30 6948494104" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.contact.form.message}</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Γράψτε το μήνυμά σας..." {...field} data-testid="input-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isSubmitting} className="w-full" data-testid="button-submit">
                    {isSubmitting ? 'Αποστολή...' : t.contact.form.submit}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  {t.contact.info.contact}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">selinamajerska@gmail.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Τηλέφωνο
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+30 6948494104</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {t.contact.info.address}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Straitsa 2, Thermi</p>
                <p className="text-muted-foreground">Θεσσαλονίκη, Ελλάδα</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <FruitDecorations />
    </section>
  );
}
