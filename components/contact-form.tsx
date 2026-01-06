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
          console.log(formVals);
          e.preventDefault();

          toast.promise(
            new Promise((resolve) => {
              axios
                .post(
                  process.env.NEXT_PUBLIC_WEBHOOK_URL!,
                  JSON.stringify(formVals),
                  {
                    headers: {
                      "Content-Type": "application/json",
                      accessControlAllowOrigin: "*",
                    },
                  }
                )
                .then((response) => {
                  if (response.status === 200) {
                    resolve(true);
                  } else {
                    throw new Error("Network response was not ok");
                  }
                })
                .catch((error) => {
                  throw new Error("Network response was not ok");
                });
            }),
            {
              loading: "Sending message...",
              success: "Message sent! I'll get back to you soon.",
              error:
                "Failed to send message. Please reach out to me via email.",
            }
          ),
            {
              duration: 4000,
              position: "top-center",
            };
        }}
        className="w-full bg-primary hover:bg-primary/90  text-white font-bold py-6"
      >
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
