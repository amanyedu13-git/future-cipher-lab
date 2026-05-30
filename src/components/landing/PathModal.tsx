import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface PathModalProps {
  children: React.ReactNode;
}

export const PathModal = ({ children }: PathModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#1a0f2e] border-violet-500/20 text-white">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-lg bg-violet-500/20">
              <Sparkles className="h-5 w-5 text-violet-400" />
            </div>
            <DialogTitle className="text-xl font-bold font-sora tracking-tight">
              Get Your Free Numerology Report
            </DialogTitle>
          </div>
          <p className="text-sm text-foreground/60 leading-relaxed">
            Fill in your details below to receive your personalized numerology analysis
          </p>
        </DialogHeader>

        <form className="space-y-4 mt-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-foreground/70">
              Full Name *
            </Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              className="bg-[#0f071d] border-violet-500/20 focus:border-violet-500/50 transition-colors h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-xs font-medium uppercase tracking-wider text-foreground/70">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="bg-[#0f071d] border-violet-500/20 focus:border-violet-500/50 transition-colors h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-foreground/70">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-[#0f071d] border-violet-500/20 focus:border-violet-500/50 transition-colors h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason" className="text-xs font-medium uppercase tracking-wider text-foreground/70">
              Why do you need this report? *
            </Label>
            <Select>
              <SelectTrigger className="bg-[#0f071d] border-violet-500/20 focus:border-violet-500/50 h-11">
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a0f2e] border-violet-500/20 text-white">
                <SelectItem value="career">Career Guidance</SelectItem>
                <SelectItem value="relationships">Relationships & Marriage</SelectItem>
                <SelectItem value="business">Business & Wealth</SelectItem>
                <SelectItem value="clarity">General Life Clarity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full h-12 mt-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-violet-500/25">
            Get My Free Numerology Report
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
