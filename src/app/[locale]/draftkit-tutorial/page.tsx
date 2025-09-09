import TimelineList from "@/components/versionManage/TimelineList";
import VersionFilter from "@/components/versionManage/VersionFilter";
import { getDictionary } from "@/utils/dictionaries";

export default async function Page( {params}: {
  params: Promise<{ locale?: string }>
}){
    const locale = (await params).locale || 'vi';
    const docsDivs = ['docs',
                        'versioned_docs/1.0']
     const dict = await getDictionary(locale);
    return (
        <div className="center">
          <VersionFilter lang={locale}
                       bigRoute={`draftkit-tutorial`}
                       docsDivs = {docsDivs}   
                       dict={dict}   
          >
          <TimelineList lang={locale}
                       bigRoute={`draftkit-tutorial`}
                       docsDivs = {docsDivs}
          />
          </VersionFilter>
        </div>

    )
}

