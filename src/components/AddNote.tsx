import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "./ui/toast";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

import { NotebookPen } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "The note needs a title",
  }),
  text: z.string().optional(),
});

const AddNote = () => {
  const [openForm, setOpenForm] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      text: "",
    },
  });

  const handleDialogChange = () => {
    form.reset();
    setOpenForm(!openForm);
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    alert(JSON.stringify(data, null, 2));
    form.reset({});
    setOpenForm(false);
    toast({
      title: "Note saved succesfully!",
      description: `Title: ${data.title}`,
      action: <ToastAction altText="Awesome">Awesome</ToastAction>,
    });
  };

  return (
    <Dialog open={openForm} onOpenChange={handleDialogChange}>
      <DialogTrigger className="flex justify-center items-center gap-4 w-52 h-10 bg-primary rounded-lg transition-all text-white hover:bg-slate-800">
        Add new note
        <NotebookPen />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-2">
          <DialogTitle className="flex justify-center items-center gap-4">
            Add new note
            <NotebookPen />
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-8">
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="How should we title this?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Text</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="I'm all ears"
                        className="resize-x-none max-h-80"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-row gap-4">
              <Button
                variant="destructive"
                className="w-full hover:animate-pulse"
                onClick={handleDialogChange}
              >
                Cancel
              </Button>
              <Button className="w-full hover:animate-pulse" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNote;
