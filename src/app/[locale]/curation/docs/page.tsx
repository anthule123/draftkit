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
        <div>
          <VersionFilter lang={locale}
                       bigRoute={`curation`}
                       docsDivs = {docsDivs} 
                       dict={dict}     
          >
          <TimelineList lang={locale}
                       bigRoute={`curation`}
                       docsDivs = {docsDivs}
          />
          </VersionFilter>
        </div>

    )
}

