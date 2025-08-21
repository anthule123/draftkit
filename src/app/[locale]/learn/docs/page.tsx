import TimelineList from "@/components/versionManage/TimelineList";
import TimelineSingleList from "@/components/versionManage/TimelineSingleList";
import VersionFilter from "@/components/versionManage/VersionFilter";

export default async function Page( {params}: {
  params: Promise<{ locale?: string }>
}){
    const locale = (await params).locale || 'vi';
    return (
        <div>
          <TimelineSingleList lang={locale}
                       bigRoute={`learn`}
                       docsDiv = 'docs'
          />
        </div>

    )
}

