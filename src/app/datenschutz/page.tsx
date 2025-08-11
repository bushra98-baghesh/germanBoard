// Remove client-side rendering since we can use server components
import fs from "fs";
import path from "path";
import styles from "./datenschutz.module.css";

export default function DatenschutzPage() {
  // Read the HTML file directly on the server
  const htmlContent = fs.readFileSync(
    path.join(process.cwd(), "public", "datenschutz.html"),
    "utf-8"
  );

  return (
    <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto px-4 py-12">
      <div
        className={styles.datenschutzContent}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}

// Add metadata for better SEO
export const metadata = {
  title: "Datenschutzerklärung | German Board",
  description:
    "Datenschutzerklärung der German Board für Bildung und Beratung UG",
};
