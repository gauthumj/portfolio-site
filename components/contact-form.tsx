"use client";
import { use, useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "sonner";

function ContactForm() {
  const [formVals, setFormVals] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          value={formVals.name}
          onChange={(e) => setFormVals({ ...formVals, name: e.target.value })}
          placeholder="Name"
          className="bg-card border border-border/50 rounded-lg p-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
        />
        <input
          type="email"
          value={formVals.email}
          onChange={(e) => setFormVals({ ...formVals, email: e.target.value })}
          placeholder="Email"
          className="bg-card border border-border/50 rounded-lg p-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
        />
      </div>
      <textarea
        value={formVals.message}
        onChange={(e) => setFormVals({ ...formVals, message: e.target.value })}
        placeholder="Message"
        rows={4}
        className="w-full bg-card border border-border/50 rounded-lg p-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
      ></textarea>
      <p className="text-sm text-muted-foreground block">
        <span className="text-primary">Note: </span>This form is directly
        handled via my home-server. No third-party services are used. Your
        details are safe and secure.
      </p>
      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log(formVals);

          if (!process.env.NEXT_PUBLIC_WEBHOOK_URL) {
            toast.error(
              "Looks like I have broken my contact form! Please reach out to me via email. (I've clicked the email link for you!)"
            );
            setTimeout(() => {
              document.getElementById("email")?.click();
            }, 2000);
            return;
          }

          const req = axios
            .post(process.env.NEXT_PUBLIC_WEBHOOK_URL, formVals, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((response) => {
              if (response.status === 200) return true;
              throw new Error("Network response was not ok");
            });

          toast.promise(req, {
            loading: "Sending message...",
            success: "Message sent! I'll get back to you soon.",
            error: () => {
              setTimeout(() => {
                document.getElementById("email")?.click();
              }, 2000);
              return "Looks like I have broken my contact form! Please reach out to me via email. (I've clicked the email link for you!)";
            },
          });
        }}
        className="w-full bg-primary hover:bg-primary/90  text-white font-bold py-6"
      >
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
