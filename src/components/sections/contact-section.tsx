"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";

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
    toast.success("Thanks — your enquiry is ready to send.", {
      description:
        "Connect this form to your CRM or email API. Validation passed for " +
        data.company +
        ".",
    });
    form.reset();
  };

  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s plan your next{" "}
              <span className="text-gradient-brand">fresh intake</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Share your categories, weekly volumes, and delivery windows — an
              account coordinator will respond with live availability.
            </p>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>
                  <span className="font-medium text-foreground">Visit / post</span>
                  <br />
                  {siteConfig.addressLine1}
                  <br />
                  {siteConfig.addressLine2}, {siteConfig.country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-primary" />
                <a
                  className="font-medium hover:text-primary"
                  href={`tel:${siteConfig.phoneE164.replace(/\s/g, "")}`}
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-primary" />
                <a
                  className="font-medium hover:text-primary"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>
                  <span className="font-medium text-foreground">Hours</span>
                  <br />
                  {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.sunday}
                </span>
              </li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[2rem] border border-white/20 p-6 shadow-xl sm:p-8"
          >
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" {...form.register("name")} />
                  {form.formState.errors.name ? (
                    <p className="text-xs text-destructive">
                      {form.formState.errors.name.message}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...form.register("email")} />
                  {form.formState.errors.email ? (
                    <p className="text-xs text-destructive">
                      {form.formState.errors.email.message}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Business</Label>
                  <Input id="company" {...form.register("company")} />
                  {form.formState.errors.company ? (
                    <p className="text-xs text-destructive">
                      {form.formState.errors.company.message}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" {...form.register("phone")} />
                  {form.formState.errors.phone ? (
                    <p className="text-xs text-destructive">
                      {form.formState.errors.phone.message}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">What do you need?</Label>
                <Textarea
                  id="message"
                  rows={4}
                  className="resize-none"
                  {...form.register("message")}
                />
                {form.formState.errors.message ? (
                  <p className="text-xs text-destructive">
                    {form.formState.errors.message.message}
                  </p>
                ) : null}
              </div>
              <Button
                type="submit"
                className="w-full rounded-full py-6 text-base shadow-lg shadow-primary/25"
                disabled={form.formState.isSubmitting}
              >
                Send enquiry
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 overflow-hidden rounded-[2rem] border border-border/80 bg-muted/30 shadow-inner"
        >
          <div className="aspect-[21/9] min-h-[220px] w-full sm:min-h-[280px]">
            <iframe
              title="Barakah Fresh Foods location map"
              src={siteConfig.mapEmbedUrl}
              className="size-full border-0"
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
