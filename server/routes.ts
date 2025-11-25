import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  message: z.string().min(10),
  language: z.enum(['en', 'el', 'pl']),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the contact form data (in production, you'd save to database or send email)
      console.log("New contact form submission:", {
        timestamp: new Date().toISOString(),
        ...validatedData,
      });

      // Return success response
      res.json({
        success: true,
        message: "Thank you for your message. We will contact you soon.",
        data: validatedData,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }
      
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
