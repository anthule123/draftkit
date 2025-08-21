import TimelineList from "@/components/versionManage/TimelineList";
import VersionFilter from "@/components/versionManage/VersionFilter";

export default async function Page( {params}: {
  params: Promise<{ locale?: string }>
}){
    const locale = (await params).locale || 'vi';
    const docsDivs = ['docs',
                        'versioned_docs/1.0']
    return (
        <div>
          <VersionFilter lang={locale}
                       bigRoute={`learn`}
                       docsDivs = {docsDivs}      
          >
          <TimelineList lang={locale}
                       bigRoute={`learn`}
                       docsDivs = {docsDivs}
          />
          </VersionFilter>
        </div>

    )
}

