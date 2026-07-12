"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Plus, Trash2, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  updateOwnProfile,
  updateOwnPassword,
  createAdmin,
  deleteAdmin,
} from "@/lib/actions/admin-account";

export type AdminRow = { id: string; name: string; email: string; isMe: boolean };

export function AdminAccountManager({
  me,
  admins,
}: {
  me: { id: string; name: string; email: string };
  admins: AdminRow[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [name, setName] = useState(me.name);
  const [email, setEmail] = useState(me.email);

  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");

  const [addOpen, setAddOpen] = useState(false);
  const [nName, setNName] = useState("");
  const [nEmail, setNEmail] = useState("");
  const [nPass, setNPass] = useState("");
  const [toDelete, setToDelete] = useState<AdminRow | null>(null);

  function saveProfile() {
    startTransition(async () => {
      const res = await updateOwnProfile(name, email);
      res.success ? toast.success(res.message || "Saved.") : toast.error(res.message || "Failed.");
      if (res.success) router.refresh();
    });
  }

  function savePassword() {
    if (next !== confirm) {
      toast.error("The new passwords don't match.");
      return;
    }
    startTransition(async () => {
      const res = await updateOwnPassword(current, next);
      if (res.success) {
        toast.success(res.message || "Password changed.");
        setCurrent(""); setNext(""); setConfirm("");
      } else toast.error(res.message || "Failed.");
    });
  }

  function addAdmin() {
    startTransition(async () => {
      const res = await createAdmin(nName, nEmail, nPass);
      if (res.success) {
        toast.success(res.message || "Admin added.");
        setAddOpen(false); setNName(""); setNEmail(""); setNPass("");
        router.refresh();
      } else toast.error(res.message || "Failed.");
    });
  }

  function removeAdmin() {
    if (!toDelete) return;
    startTransition(async () => {
      const res = await deleteAdmin(toDelete.id);
      if (res.success) {
        toast.success(res.message || "Removed.");
        setToDelete(null);
        router.refresh();
      } else toast.error(res.message || "Failed.");
    });
  }

  return (
    <div className="space-y-6">
      {/* Your details */}
      <div className="surface-card p-6">
        <h2 className="text-h3 mb-4 text-deep-blue">Your details</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label>Name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label>Login email</Label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          This is the email you sign in with. Changing it takes effect immediately.
        </p>
        <div className="mt-4 flex justify-end">
          <Button onClick={saveProfile} disabled={isPending}>Save details</Button>
        </div>
      </div>

      {/* Password */}
      <div className="surface-card p-6">
        <h2 className="text-h3 mb-4 text-deep-blue">Change your password</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <Label>Current password</Label>
            <Input type="password" value={current} onChange={(e) => setCurrent(e.target.value)} />
          </div>
          <div>
            <Label>New password</Label>
            <Input type="password" value={next} onChange={(e) => setNext(e.target.value)} />
          </div>
          <div>
            <Label>Confirm new password</Label>
            <Input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
          </div>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">At least 10 characters. Use something unique.</p>
        <div className="mt-4 flex justify-end">
          <Button onClick={savePassword} disabled={isPending || !current || !next}>Change password</Button>
        </div>
      </div>

      {/* Other admins */}
      <div className="surface-card p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-h3 text-deep-blue">Admin users ({admins.length})</h2>
          <Button onClick={() => setAddOpen(true)}><Plus className="mr-1.5 h-4 w-4" /> Add admin</Button>
        </div>
        <ul className="space-y-2">
          {admins.map((a) => (
            <li key={a.id} className="flex items-center gap-3 rounded-xl border border-deep-blue/5 bg-white/60 p-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-bg text-medical-blue">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-deep-blue">
                  {a.name}
                  {a.isMe && <span className="ml-2 rounded-full bg-coral/10 px-2 py-0.5 text-xs text-coral">You</span>}
                </p>
                <p className="truncate text-xs text-muted-foreground">{a.email}</p>
              </div>
              {!a.isMe && (
                <Button variant="ghost" size="sm" onClick={() => setToDelete(a)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Add admin dialog */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Add an admin</DialogTitle>
          <DialogDescription>They'll be able to sign in and manage the site immediately.</DialogDescription>
          <div className="mt-4 space-y-4">
            <div>
              <Label>Name</Label>
              <Input value={nName} onChange={(e) => setNName(e.target.value)} />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" value={nEmail} onChange={(e) => setNEmail(e.target.value)} />
            </div>
            <div>
              <Label>Temporary password</Label>
              <Input type="password" value={nPass} onChange={(e) => setNPass(e.target.value)} />
              <p className="mt-1 text-xs text-muted-foreground">
                At least 10 characters. Share it with them securely — they can change it here after signing in.
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setAddOpen(false)}>Cancel</Button>
            <Button onClick={addAdmin} disabled={isPending}>Add admin</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete admin */}
      <Dialog open={!!toDelete} onOpenChange={(o) => !o && setToDelete(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Remove admin?</DialogTitle>
          <DialogDescription>
            {toDelete ? `${toDelete.name} (${toDelete.email}) will lose access to the admin area immediately.` : ""}
          </DialogDescription>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setToDelete(null)}>Cancel</Button>
            <Button variant="destructive" onClick={removeAdmin} disabled={isPending}>Remove</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
