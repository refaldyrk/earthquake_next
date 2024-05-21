import {Suspense} from "react";

export default function Loading() {
    return (
        <section>
            <Suspense fallback={<p>Loading feed...</p>}>
            </Suspense>
        </section>
    )
}
