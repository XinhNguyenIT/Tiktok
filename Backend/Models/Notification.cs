using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Notification
{
    public long Id { get; set; }

    public string UserId { get; set; } = null!;

    public string? ActorId { get; set; }

    public string Type { get; set; } = null!;

    public long? ReferenceId { get; set; }

    public string Message { get; set; } = null!;

    public bool IsRead { get; set; }

    public DateTime CreatedAt { get; set; }

    public virtual AspNetUser? Actor { get; set; }

    public virtual AspNetUser User { get; set; } = null!;
}
