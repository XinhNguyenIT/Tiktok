using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class PostReport
{
    public long Id { get; set; }

    public long PostId { get; set; }

    public string ReporterId { get; set; } = null!;

    public string Reason { get; set; } = null!;

    public string? Description { get; set; }

    public string Status { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public virtual Post Post { get; set; } = null!;

    public virtual AspNetUser Reporter { get; set; } = null!;
}
