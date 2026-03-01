import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import styles from "./RecentReports.module.css";
import { Image } from "lucide-react";

function RecentReports() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectionHeader}>Recent Reports</div>
      <div className={styles.accordionContainer}>
        <Accordion
          type="single"
          collapsible
          defaultValue="billing"
          className="w-full rounded-lg border"
        >
          <AccordionItem value="1" className="px-4">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className={styles.accordionTrigger}>
                <div className={styles.leftSide}>
                  <div className={styles.topContainer}>
                    <div className={styles.stockPill}>In Stock</div>
                    <div className={styles.price}>$579.99</div>
                  </div>
                  <div className={styles.midContainer}>
                    Reported by <span className={styles.userName}>Alex M.</span>
                  </div>
                  <div className={styles.bottomContainer}>25 minutes ago</div>
                </div>
                <div className={styles.rightSide}>
                  <div className={styles.photoIndicator}>
                    <Image size={14} />
                    View Photo
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
              Hello World
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2" className="px-4">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className={styles.accordionTrigger}>
                <div className={styles.leftSide}>
                  <div className={styles.topContainer}>
                    <div className={styles.stockPill}>In Stock</div>
                    <div className={styles.price}>$579.99</div>
                  </div>
                  <div className={styles.midContainer}>
                    Reported by <span className={styles.userName}>Alex M.</span>
                  </div>
                  <div className={styles.bottomContainer}>25 minutes ago</div>
                </div>
                <div className={styles.rightSide}>
                  <div className={styles.photoIndicator}>
                    <Image size={14} />
                    View Photo
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
              Hello World
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2" className="px-4">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className={styles.accordionTrigger}>
                <div className={styles.leftSide}>
                  <div className={styles.topContainer}>
                    <div className={styles.stockPill}>In Stock</div>
                    <div className={styles.price}>$579.99</div>
                  </div>
                  <div className={styles.midContainer}>
                    Reported by <span className={styles.userName}>Alex M.</span>
                  </div>
                  <div className={styles.bottomContainer}>25 minutes ago</div>
                </div>
                <div className={styles.rightSide}>
                  <div className={styles.photoIndicator}>
                    <Image size={14} />
                    View Photo
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
              Hello World
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2" className="px-4">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className={styles.accordionTrigger}>
                <div className={styles.leftSide}>
                  <div className={styles.topContainer}>
                    <div className={styles.stockPill}>In Stock</div>
                    <div className={styles.price}>$579.99</div>
                  </div>
                  <div className={styles.midContainer}>
                    Reported by <span className={styles.userName}>Alex M.</span>
                  </div>
                  <div className={styles.bottomContainer}>25 minutes ago</div>
                </div>
                <div className={styles.rightSide}>
                  <div className={styles.photoIndicator}>
                    <Image size={14} />
                    View Photo
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
              Hello World
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2" className="px-4">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className={styles.accordionTrigger}>
                <div className={styles.leftSide}>
                  <div className={styles.topContainer}>
                    <div className={styles.stockPill}>In Stock</div>
                    <div className={styles.price}>$579.99</div>
                  </div>
                  <div className={styles.midContainer}>
                    Reported by <span className={styles.userName}>Alex M.</span>
                  </div>
                  <div className={styles.bottomContainer}>25 minutes ago</div>
                </div>
                <div className={styles.rightSide}>
                  <div className={styles.photoIndicator}>
                    <Image size={14} />
                    View Photo
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
              Hello World
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2" className="px-4">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className={styles.accordionTrigger}>
                <div className={styles.leftSide}>
                  <div className={styles.topContainer}>
                    <div className={styles.stockPill}>In Stock</div>
                    <div className={styles.price}>$579.99</div>
                  </div>
                  <div className={styles.midContainer}>
                    Reported by <span className={styles.userName}>Alex M.</span>
                  </div>
                  <div className={styles.bottomContainer}>25 minutes ago</div>
                </div>
                <div className={styles.rightSide}>
                  <div className={styles.photoIndicator}>
                    <Image size={14} />
                    View Photo
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
              Hello World
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2" className="px-4">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className={styles.accordionTrigger}>
                <div className={styles.leftSide}>
                  <div className={styles.topContainer}>
                    <div className={styles.stockPill}>In Stock</div>
                    <div className={styles.price}>$579.99</div>
                  </div>
                  <div className={styles.midContainer}>
                    Reported by <span className={styles.userName}>Alex M.</span>
                  </div>
                  <div className={styles.bottomContainer}>25 minutes ago</div>
                </div>
                <div className={styles.rightSide}>
                  <div className={styles.photoIndicator}>
                    <Image size={14} />
                    View Photo
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
              Hello World
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2" className="px-4">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className={styles.accordionTrigger}>
                <div className={styles.leftSide}>
                  <div className={styles.topContainer}>
                    <div className={styles.stockPill}>In Stock</div>
                    <div className={styles.price}>$579.99</div>
                  </div>
                  <div className={styles.midContainer}>
                    Reported by <span className={styles.userName}>Alex M.</span>
                  </div>
                  <div className={styles.bottomContainer}>25 minutes ago</div>
                </div>
                <div className={styles.rightSide}>
                  <div className={styles.photoIndicator}>
                    <Image size={14} />
                    View Photo
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
              Hello World
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2" className="px-4">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className={styles.accordionTrigger}>
                <div className={styles.leftSide}>
                  <div className={styles.topContainer}>
                    <div className={styles.stockPill}>In Stock</div>
                    <div className={styles.price}>$579.99</div>
                  </div>
                  <div className={styles.midContainer}>
                    Reported by <span className={styles.userName}>Alex M.</span>
                  </div>
                  <div className={styles.bottomContainer}>25 minutes ago</div>
                </div>
                <div className={styles.rightSide}>
                  <div className={styles.photoIndicator}>
                    <Image size={14} />
                    View Photo
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
              Hello World
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2" className="px-4">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className={styles.accordionTrigger}>
                <div className={styles.leftSide}>
                  <div className={styles.topContainer}>
                    <div className={styles.stockPill}>In Stock</div>
                    <div className={styles.price}>$579.99</div>
                  </div>
                  <div className={styles.midContainer}>
                    Reported by <span className={styles.userName}>Alex M.</span>
                  </div>
                  <div className={styles.bottomContainer}>25 minutes ago</div>
                </div>
                <div className={styles.rightSide}>
                  <div className={styles.photoIndicator}>
                    <Image size={14} />
                    View Photo
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
              Hello World
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default RecentReports;
