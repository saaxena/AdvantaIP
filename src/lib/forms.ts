const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export type SubmitResult = { ok: boolean; message: string };

/**
 * Submits form data to Web3Forms (https://web3forms.com) — a no-backend form
 * delivery service. Requires NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to be set in
 * .env.local (see .env.example). Falls back to a friendly error if unset so
 * the UI never silently fails.
 */
export async function submitForm(
  fields: Record<string, string>,
  subject: string
): Promise<SubmitResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      ok: false,
      message:
        'Form delivery is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local — see .env.example and the README for setup steps.',
    };
  }

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_key: accessKey, subject, ...fields }),
    });
    const data = await res.json();
    if (data.success) {
      return { ok: true, message: 'Thanks — your message is on its way.' };
    }
    return { ok: false, message: data.message || 'Something went wrong. Please try again.' };
  } catch {
    return { ok: false, message: 'Network error — please check your connection and try again.' };
  }
}
