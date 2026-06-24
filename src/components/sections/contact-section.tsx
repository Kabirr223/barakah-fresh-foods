"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getWhatsAppOrderUrl, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email."),
  company: z.string().min(2, "Company name is required."),
  phone: z.string().min(8, "Enter a reachable phone number."),
  message: z.string().min(16, "Tell us a bit more about your order volume."),
});

type FormValues = z.infer<typeof schema>;

export function ContactSection() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(
      `Wholesale Enquiry from ${data.company}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nCompany: ${data.company}\nPhone: ${data.phone}\nEmail: ${data.email}\n\n${data.message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…", {
      description: "Your enquiry is ready to send.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="relative scroll-mt-28 py-24 sm:py-32">
      <div className="absolute inset-0 bg-luxury-mesh opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bf-gold">
            Contact
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Get in touch for{" "}
            <span className="text-gradient-gold">wholesale enquiries</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel-gold rounded-3xl p-8"
          >
            <h3 className="font-heading text-xl font-semibold text-white">
              {siteConfig.name}
            </h3>
            <ul className="mt-8 space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-bf-gold" />
                <span className="text-white/80">
                  {siteConfig.addressLine1}
                  <br />
                  {siteConfig.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="size-5 text-bf-gold" />
                <a
                  className="font-medium text-white hover:text-bf-gold"
                  href={`tel:${siteConfig.phoneE164}`}
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="size-5 text-bf-gold" />
                <a
                  className="font-medium text-white hover:text-bf-gold"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-bf-gold" />
                <span className="text-white/80">
                  {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.sunday}
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full border-bf-gold/30 text-bf-gold",
                )}
              >
                <Phone className="size-4" />
                Click to Call
              </a>
              <Link
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants(),
                  "rounded-full bg-[#25D366] hover:bg-[#20bd5a]",
                )}
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full border-bf-gold/30 text-bf-gold",
                )}
              >
                <Mail className="size-4" />
                Email
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-6 sm:p-8"
          >
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/80">
                    Name
                  </Label>
                  <Input
                    id="name"
                    className="border-bf-gold/20 bg-white/5 text-white"
                    {...form.register("name")}
                  />
                  {form.formState.errors.name ? (
                    <p className="text-xs text-red-400">
                      {form.formState.errors.name.message}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="border-bf-gold/20 bg-white/5 text-white"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email ? (
                    <p className="text-xs text-red-400">
                      {form.formState.errors.email.message}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white/80">
                    Business
                  </Label>
                  <Input
                    id="company"
                    className="border-bf-gold/20 bg-white/5 text-white"
                    {...form.register("company")}
                  />
                  {form.formState.errors.company ? (
                    <p className="text-xs text-red-400">
                      {form.formState.errors.company.message}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white/80">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    className="border-bf-gold/20 bg-white/5 text-white"
                    {...form.register("phone")}
                  />
                  {form.formState.errors.phone ? (
                    <p className="text-xs text-red-400">
                      {form.formState.errors.phone.message}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white/80">
                  What do you need?
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  className="resize-none border-bf-gold/20 bg-white/5 text-white"
                  {...form.register("message")}
                />
                {form.formState.errors.message ? (
                  <p className="text-xs text-red-400">
                    {form.formState.errors.message.message}
                  </p>
                ) : null}
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-bf-gold py-6 text-base font-semibold text-bf-charcoal hover:bg-bf-gold/90"
                disabled={form.formState.isSubmitting}
              >
                Send Enquiry
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 overflow-hidden rounded-3xl border border-bf-gold/20 shadow-xl"
        >
          <div className="aspect-[21/9] min-h-[220px] w-full sm:min-h-[280px]">
            <iframe
              title="Barakah Fresh Foods location map"
              src={siteConfig.mapEmbedUrl}
              className="size-full border-0 grayscale-[30%] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
